import React from 'react'
import Head from 'next/head'

const Foo = ({ t }) => (
  <div>
    <Head>
      <title>Foo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className='font_h1-slab'>Foo</h1>
  </div>
)

export default Foo
