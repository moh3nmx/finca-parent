export default function({ $auth, redirect, route }) {
  if($auth.loggedIn) {
    if(route.name !== 'auth-register' || !$auth.user.shouldCompleteInformation) {
      redirect('/')
    }
  } else {
    if(route.name === 'auth-register') {
      redirect('/auth/login')
    }
  }
}