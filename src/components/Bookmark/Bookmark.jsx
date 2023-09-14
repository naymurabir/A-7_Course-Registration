import PropTypes from 'prop-types';

const Bookmark = ({ bookMark }) => {
    const { title } = bookMark

    return (

        <>
            <li className='list-decimal list-inside py-1'> {title} </li>
        </>

    );
};

Bookmark.propTypes = {
    bookMark: PropTypes.object.isRequired,
}

export default Bookmark;