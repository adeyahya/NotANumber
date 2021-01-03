import { motion, AnimateSharedLayout } from 'framer-motion'
import { BsTriangleFill } from 'react-icons/bs'
import Item from '../shared/Item'

export default ({ state, inputs }) => {
  const doubleCounted = (index) => state.doubleCounted.includes(index)
  return (
    <>
      <div className="flex w-full justify-center">
        <AnimateSharedLayout>
          {state.arr.map((item, index) => (
            <Item
              key={index}
              active={(state.subarray || []).includes(index) || state.__done}
              variant={doubleCounted(index) ? 'danger' : 'base'}
              className="relative"
            >
              {item}
              {index === state.i && (
                <motion.div
                  layoutId="caret"
                  className="absolute top-full mt-1 text-green-500"
                  style={{
                    fontSize: '8px',
                  }}
                >
                  <BsTriangleFill />
                </motion.div>
              )}
            </Item>
          ))}
        </AnimateSharedLayout>
      </div>
      <p className="font-mono w-full text-center mt-4">k = {inputs[1]}</p>
      <p className="font-mono w-full text-center">
        {JSON.stringify(state.result)}
      </p>
    </>
  )
}
