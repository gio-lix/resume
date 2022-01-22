import React, {FC} from 'react';
import {IService} from "../types";

const ServiceCart: FC<{service: IService}> = ({service: {Icon,title,about}}) => {
    return (
        <div className='p-2 flex items-center space-x-4'>
            <div>
                <Icon className='w-10 h-10 text-green-400'/>
            </div>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default ServiceCart;
