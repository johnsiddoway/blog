import { parseISO, format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export function Date(props) {
    const date = parseISO(props.dateString);

    return <>
        <time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>
        <FontAwesomeIcon icon={faCalendarAlt} fixedWidth className="ms-1" />
    </>;
}
