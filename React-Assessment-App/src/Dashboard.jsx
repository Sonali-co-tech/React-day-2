import UserProfile from './UserProfile'

const users = [
  { id: 1, username: 'Sonali', age: 24, isAdmin: true },
  { id: 2, username: 'Rohan', age: 29, isAdmin: false },
  { id: 3, username: 'Aisha', age: 27 },
]

function Dashboard() {
  return (
    <div className="profile-grid">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          username={user.username}
          age={user.age}
          isAdmin={user.isAdmin}
        />
      ))}
    </div>
  )
}

export default Dashboard
