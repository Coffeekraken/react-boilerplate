import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "formpage" */ './index'),
  loading: Loading,
  modules: ['formpage']
})
