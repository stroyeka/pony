import React from 'react'

export default (props) => (
    <ul className="items-list">
        {props.items.map((item, i) => 
            item && 
            <li key={i}>
                <div className="item-name">
                    {item.name}
                    {
                        item.is_new && <span className="item-name__new">Новинка</span>
                    }
                </div>
                <ul className="item-attrs">
                    <li>
                        Цвет<br/>{item.color}
                    </li>
                    <li>
                        Вид<br/>{item.kind}
                    </li>
                    <li>
                        Цена<br/>{item.price}
                    </li>
                </ul>
            </li>
        )}
    </ul>
)