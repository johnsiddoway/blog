import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Date } from './Date';

export function BlogListItem(props) {
    return <li className="d-flex border-bottom border-dark mb-2 pb-2">
        <div className="h4 mb-0">
            <Link href={`/posts/${props.id}`}>
                <a className="text-decoration-none">{props.title}</a>
            </Link>
        </div>
        <div className="d-none d-sm-block ms-auto mt-auto">
            <Date dateString={props.date} />
            <FontAwesomeIcon icon={faCalendarAlt} fixedWidth className="ms-1" />
        </div>
    </li>
}