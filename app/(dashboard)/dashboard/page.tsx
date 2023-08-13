import {UserButton}  from "@clerk/nextjs/app-beta";
function DashboardPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default DashboardPage