import React from 'react'
import { Box } from '@mui/system'
import { Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { ROUTE_lIST } from '@/components/common/header/routes'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
	return (
		<Box display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_lIST.map((route) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink sx={{ ml: 2 }}>{route.label}</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
