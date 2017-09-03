import React from 'react'

export default (props) => (
    <ul className="items-list">
        {props.items.map((item, i) => 
            item && <li key={i}>{
                Object.keys(item).map((key, j) => 
                    key === 'is_new' && item[key] ? 
                    <span key={j}>
                        Новинка
                    </span> :
                    <span key={j}>
                        {item[key]}
                    </span>
                )
            }
            </li>
        )}
    </ul>
)