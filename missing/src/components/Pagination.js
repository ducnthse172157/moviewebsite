import React, { Component } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
export default function Pagination() {
    const { theme, toggle, dark } = useContext(ThemeContext)
        return (
            <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='pagination1'>
                <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="pagination">
                    <a style={{color: theme.color }} href="#">&laquo;</a>
                    <a style={{color: theme.color }} href="#">1</a>
                    <a style={{color: theme.color }} href="#">2</a>
                    <a style={{color: theme.color }} href="#">3</a>
                    <a style={{color: theme.color }} href="#">4</a>
                    <a style={{color: theme.color }} href="#">5</a>
                    <a style={{color: theme.color }} href="#">6</a>
                    <a style={{color: theme.color }} href="#">...</a>
                    <a style={{color: theme.color }} href="#">20</a>
                    <a style={{color: theme.color }} href="#">&raquo;</a>
                </div>
                <hr className='hr1' />
            </div>  
        )
}
