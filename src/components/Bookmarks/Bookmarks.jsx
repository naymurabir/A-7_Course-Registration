import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookMarks, totalCredit, remainingCredit, totalPrice }) => {
    return (
        <div className="md:w-1/3">

            <div className='bg-white shadow-md rounded ml-4 px-5'>

                <div>
                    <h2 className='text-blue-500 font-bold text-sm py-3'>Credit Hour Remaining {remainingCredit} hr</h2>
                </div>
                <hr />

                <h2 className='text-black font-bold py-3'>Course Name</h2>

                <ol>
                    {
                        bookMarks.map((bookMark, idx) => <Bookmark key={idx} bookMark={bookMark} ></Bookmark>)
                    }
                </ol>

                <hr />

                <div>
                    <h2 className='text-black font-normal text-sm py-3'>Total Credit Hour : {totalCredit} </h2>
                </div>

                <hr />

                <div>
                    <h3 className='text-black font-normal text-sm py-3'>Total Price : {totalPrice} USD</h3>
                </div>

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired

}

export default Bookmarks;