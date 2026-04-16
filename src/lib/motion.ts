/* Slightly longer, calmer easing curve for premium "float" motion. */
export const smoothEase = [0.22, 1, 0.36, 1] as const

/* Trigger reveals a bit earlier so sections feel anticipatory, not abrupt. */
export const sectionViewport = { once: true, margin: '-120px' } as const
