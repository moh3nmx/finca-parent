export default function ({ $auth, redirect, route }) {
  // console.log('need_auth');
  // console.log($auth);
  if (!$auth.loggedIn) {
    redirect({
      path: '/auth/login',
      query: { callback: route.fullPath },
    })
  } else if($auth.user.shouldCompleteInformation) {
    redirect({
      path: '/auth/register'
    })
  }
}
