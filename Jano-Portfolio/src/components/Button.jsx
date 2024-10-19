import React from 'react'
import PropTypes from 'prop-types'



const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={'btn btn-primary' + classes}
            >

                {label}
                {icon ? (
                    <span className='material-symbols-rounded'
                        aria-hidden="true">
                        {icon}
                    </span>
                ) : undifiend
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-primary ' + classes}
            >

                {label}
                {icon ? (
                    <span className='material-symbols-rounded'
                        aria-hidden="true">
                        {icon}
                    </span>
                ) : undifiend
                }</button>
        )
    }

}

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={'btn btn-outline ' + classes}
            >

                {label}
                {icon ? (
                    <span className='material-symbols-rounded'
                        aria-hidden="true">
                        {icon}
                    </span>
                ) : undifiend
                }
            </a>
        )
    } else {
        return (
            <button className={'btn btn-outline ' + classes}
            >

                {label}
                {icon ? (
                    <span className='material-symbols-rounded'
                        aria-hidden="true">
                        {icon}
                    </span>
                ) : undifiend
                }</button>
        )
    }

}

ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export { ButtonPrimary, ButtonOutline }
