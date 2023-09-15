import { BsCurrencyDollar, BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Course = ({ course, handleAddToBookMarks }) => {

    const { cover_img, title, description, price, credit } = course

    return (
        <div className=' bg-white shadow-md rounded-md space-y-2 px-2 py-3 relative'>

            <img className='w-full' src={cover_img} alt="" />
            <h2 className='text-sm text-black font-bold'> {title} </h2>
            <p className='text-sm font-medium'> {description} </p>

            <div className='flex justify-between'>
                <h4 className='text-sm flex gap-2 md:gap-2 lg:gap-0 items-center mb-10'> <BsCurrencyDollar />  Price: {price} </h4>
                <h4 className='text-sm flex gap-2 md:gap-2 lg:gap-0 items-center mb-10'> <BsBook /> Credit: {credit}hr </h4>
            </div>

            <button onClick={() => { handleAddToBookMarks(course) }} className='text-white bg-blue-500 px-2 py-1 rounded-lg w-full font-semibold absolute left-0 bottom-0'> Select </button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToBookMarks: PropTypes.func.isRequired
}

export default Course;