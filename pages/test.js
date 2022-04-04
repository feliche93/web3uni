import React from 'react'
import PageHeader from '../components/PageHeader'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'
import Breadcrumb from '../components/Layout/NavigationApp/Breadcrumb'

export default function index() {
  return (
    <>
      <Breadcrumb />
      <PageHeader />
      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {/* Description list*/}
          <LessonCard />
        </div>
        <ProgressBar />
      </div>
    </>
  )
}
