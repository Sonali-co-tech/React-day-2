function UserProfile({ username, age, isAdmin = false }) {
  return (
    <article className="user-profile-card">
      <h3>{username}</h3>
      <p>
        <span>Age:</span> {age}
      </p>
      <p className={isAdmin ? 'badge admin' : 'badge member'}>
        {isAdmin ? 'Admin' : 'Member'}
      </p>
    </article>
  )
}

export default UserProfile
