import Breadcrumb from './Breadcrumb'
import Navbar from './Navbar'

export default function Navigation() {
  return (
    <div className="bg-white shadow">
      <Navbar/>
      <Breadcrumb />
    </div>
  )
}
