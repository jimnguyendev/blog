import React from 'react'
import { Box } from '@mui/system'
import { Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { ROUTE_lIST } from '@/components/common/header/routes'
import { useRouter } from 'next/dist/client/router'
import clsx from 'clsx'

export function HeaderDesktop() {
	const router = useRouter()

	return (
		<Box display={{ xs: 'none', lg: 'block' }}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_lIST.map((route) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink
								sx={{ ml: 2, fontWeight: 'medium' }}
								className={clsx({ active: router.pathname === route.path })}
							>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
