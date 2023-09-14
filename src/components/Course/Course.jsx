import { FaDollarSign, FaBook } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Course = ({ course }) => {

    const { cover_img, title, description, price, credit } = course

    return (
        <div className=' bg-white shadow-xl rounded-md space-y-2 px-2 py-3'>
            <img className='w-full' src={cover_img} alt="" />
            <h2 className='text-sm text-black font-bold'> {title} </h2>
            <p className='text-sm font-medium'> {description} </p>

            <div className='flex justify-between'>
                <h4 className='text-sm flex gap-1 items-center'> <FaDollarSign />  Price: {price} </h4>
                <h4 className='text-sm flex gap-1 items-center'> <FaBook /> Credit: {credit}hr </h4>
            </div>
            <button className='text-white bg-blue-500 px-2 py-1 rounded-lg w-full font-semibold mt-auto'> Select </button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;