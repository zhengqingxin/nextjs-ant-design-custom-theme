import Head from 'next/head'
// import { Button } from 'antd'
import { Button } from 'antd-mobile'
import stylesheet from '../ant-theme-vars.less';

/*
  for development you can use this instead of link to extracted css
  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
 */

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    <Button type="primary">primary</Button>
  </div>
)
