import React, {Component} from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from "react-icons/md";

const ExpenseList = ({hadleDelete, expenses, handleEdit, clearItems}) => {
    return (
        <>
            <ul className='List'>
                {/*ExpenseItem*/}
                {expenses.map(expense => {
                    return (
                        <ExpenseItem
                            expense={expense}
                            key={expense.id}
                            handleDelete={hadleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
            {expenses.length > 0 && (
                <button className='btn' onClick={clearItems}>
                    목록 지우기
                    <MdDelete className='btn-icon' />
                </button>
            )}
        </>
    )
}

export default ExpenseList;