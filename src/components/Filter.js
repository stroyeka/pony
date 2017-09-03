import React from 'react'
import ReactModal from 'react-modal'
import { colors } from '../data/Colors'
import { kinds } from '../data/Kinds'
import { 
    CHOOSE_COLOR, 
    CHOOSE_KIND 
} from '../constants'

export default (props) => (
    <ReactModal
        isOpen={props.isOpen}
        onRequestClose={props.close}
        contentLabel='onRequestClose Example'
        className='Modal'
        overlayClassName='Overlay'
    >    
        <div className="filter">
            <div className="filter-close">
                <button onClick={props.close}>Закрыть</button>
            </div>
            <div className="filter-row">
                <select onChange={(e) => props.setFilterValue('color', e.target.value)} value={props.currentState.color}>
                    <option>{CHOOSE_COLOR}</option>
                    {colors.map((color, key) => 
                        <option key={key}>{color}</option>
                    )}
                </select>
            </div>
            <div className="filter-row">
                <select onChange={(e) => props.setFilterValue('kind', e.target.value)} value={props.currentState.kind}>
                    <option>{CHOOSE_KIND}</option>
                    {kinds.map((kind, key) => 
                        <option key={key}>{kind}</option>
                    )}
                </select>
            </div>
            <div className="filter-row filter-row__price">
                <div>Цена</div>
                <label>
                    от
                    <input 
                        value={props.currentState.price_min !== undefined ? props.currentState.price_min : ''}
                        onChange={(e) => props.setFilterValue('price_min', e.target.value)}
                    />
                </label>
                <label>
                    до
                    <input 
                        value={props.currentState.price_max !== undefined ? props.currentState.price_max : ''}
                        onChange={(e) => props.setFilterValue('price_max', e.target.value)}
                    />
                </label>
            </div>
            <div className="filter-row">
                Новинка?
                <label>
                    <input 
                        type="radio" 
                        name="is_new" 
                        checked={props.currentState.is_new === true} 
                        value={props.currentState.is_new}
                        onChange={(e) => props.setFilterValue('is_new', true)} 
                    />
                    Да
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="is_new" 
                        checked={props.currentState.is_new === false} 
                        value={props.currentState.is_new} 
                        onChange={(e) => props.setFilterValue('is_new', false)} 
                    />
                    Нет
                </label>
            </div>           
            <div className="filter-row">
                <button onClick={props.apply}>Найти</button>
            </div>
        </div>
    </ReactModal>
)