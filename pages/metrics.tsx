import { setupAPIClient } from '../services/api'
import { withSSRAuth } from '../utils/withSSRAuth'

export default function Metrics() {

  return (
    <>
      <h1>Metrics</h1>
        <p><strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur saepe quidem rem itaque est ipsum? Ad natus vel, vitae facilis tempore dicta voluptas explicabo ipsam fugit ullam nisi tenetur?</strong>
          <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus pariatur eius cumque porro saepe veniam dolores, repellendus vero voluptate? Voluptate, neque. Libero maxime, ratione ullam facere provident minima qui.
        </p>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
})