import Link from 'next/link';
import { Date } from './date';

export function BlogListItem(props) {
    return <li className="d-flex border-bottom border-dark mb-2 pb-2">
        <h4 className="mb-0">
            <Link href={`/posts/${props.id}`}>
                <a className="text-decoration-none">{props.title}</a>
            </Link>
        </h4>
        <div className="d-none d-md-block ms-auto mt-auto">
            <Date dateString={props.date} />
        </div>
    </li>
}
