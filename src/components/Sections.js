import PropTypes from 'prop-types'

function Sections({ title, children }) {
    return (
        <div>
            {title && <h2>{title}</h2>}

            {children}
        </div>
    )
}

Sections.propTypes = {
    title: PropTypes.string,
}

export default Sections