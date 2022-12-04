import * as React from 'react'
import { HeaderMobile } from '@/components/common/header/header-mobile'
import { HeaderDesktop } from '@/components/common/header/header-desktop'

export function Header() {
	return (
		<>
			<HeaderMobile />
			<HeaderDesktop />
		</>
	)
}
