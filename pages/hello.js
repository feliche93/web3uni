import React from 'react'
import PageHeader from '../components/PageHeader'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'
import CardTest from '../components/CardTest'

export default function index() {
    const name = 'Lucas'

    return (
        <>
            <button onClick={() => alert('Hello')}>Click me</button>
            <CardTest name={'Felix'}/>
            <CardTest name={'Lucas'}/>
            <CardTest name={'Sandra'}/>
            <CardTest/>
        </>
    )
}
