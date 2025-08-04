'use client'
import { motion } from 'framer-motion';
import React from 'react';
import "./animation.css";

type Props = {}

export default function Animation({ }: Props) {
  const colors = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
const durations = [0.9,0.8,0.7,0.6,0.5];
  return (
    <div className='grid grid-cols-5 fixed z-20 w-screen h-screen overflow-hidden'>
      {colors.map((color, index) => {


        return (
          <motion.div
            key={index}
            className={`${color} w-full`}
            initial={{ height: '100%' }}
            animate={{ height: 0 }}
            transition={{
              duration: durations[index],
              delay: 0,
              ease: 'easeInOut'
            }}
          />
        );
      })}
    </div>
  )
}
