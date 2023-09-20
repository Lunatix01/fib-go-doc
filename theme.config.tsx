import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
    logo: <div style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
        <Image style={{ borderRadius: "8px" }} src="/img/FIB.jpeg" alt="Hello" width={23} height={23} />
        <span>FIB-GO</span>
    </div>,
    project: {
        link: 'https://github.com/Lunatix01/fib-go',
    },
    chat: {
        link: 'https://discord.gg/Bc79Y7s3DA',
    },
    footer: {
        text: 'FIB-GO Documentation',
    },
    docsRepositoryBase: 'https://github.com/Lunatix01/fib-go-doc/blob/main/',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Fib-go Documentation',
        }
    }

}

export default config
