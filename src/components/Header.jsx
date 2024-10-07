import {Link} from 'react-router-dom';
import HomeBanner from '../assets/images/download.jpg'


export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div>
            <div className="flex justify-center">
                <img alt="" src={HomeBanner} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            {paragraph && linkName && ( 
                <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                    {paragraph}{' '}
                    <Link to={linkUrl} className="font-medium text-blue-600 hover:text-blue-500">
                        {linkName}
                    </Link>
                </p>
            )}
        </div>
    )
}