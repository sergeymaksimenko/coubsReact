import React, {Component} from 'react'
import './style.css'
import Coub from './Coub'

class TableRow extends Component {

    render() {
        return (
            <div className='tableRow'>
                <Coub/>
                <Coub/>
                <Coub/>
                <Coub/>
            </div>
        )
    }
}
