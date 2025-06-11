'use client'

import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'
import { Heading } from '@/components/text'
import { motion } from 'framer-motion'

export default function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 h-144 sm:h-auto sm:w-304"
        >
          <Screenshot width={1216} height={768} src="/screenshots/app.png" />
        </motion.div>
      </Container>
    </div>
  )
}
