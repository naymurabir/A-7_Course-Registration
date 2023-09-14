import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className="md:w-1/3">

            <div className='bg-white shadow-md rounded ml-4 px-5'>

                <h2 className='text-black font-bold py-3'>Course Name</h2>

                <ol>
                    {
                        bookMarks.map((bookMark, idx) => <Bookmark key={idx} bookMark={bookMark} ></Bookmark>)
                    }
                </ol>

                <hr />
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired
}

export default Bookmarks;