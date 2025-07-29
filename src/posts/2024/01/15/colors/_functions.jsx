export function HslaToString({ h, s, l, a }) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}
export function HslaToHexa({ h, s, l, a }) {
    let { r, g, b } = HslToRgb({ h, s, l });

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    if (a.length == 1) {
        a = "0" + a;
    }

    return "#" + r + g + b + a;
}

// export function HslToHex({ h, s, l }) {
//     const rgb = HslToRgb({ h, s, l });

//     let r = rgb.r.toString(16);
//     let g = rgb.g.toString(16);
//     let b = rgb.b.toString(16);

//     // Prepend 0s, if necessary
//     if (r.length == 1)
//         r = "0" + r;
//     if (g.length == 1)
//         g = "0" + g;
//     if (b.length == 1)
//         b = "0" + b;

//     return "#" + r + g + b;
// }

// export function HslaToRgba({ h, s, l, a }) {
//     const { r, g, b } = HslToRgb({ h, s, l });
//     return { r, g, b, a };
// }

export function HslToRgb({ h, s, l }) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
}
