export default function ({ store, redirect }) {
  const { loggedIn } = store.state.auth
  if (!loggedIn) {
    return redirect('/login')
  }
}
