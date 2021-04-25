<script context="module">
  import blob from 'blobs/v2/index.js';

  import { generateRandomColor } from '$utils/color';
  import { randBetween } from '$utils/random';

  const offsets = [0, 20, 70, 100],
    generateGradient = () => {
      const stops: { offset: number; color: string; stopOpacity: number }[] = [];

      for (let i = 0; i < 4; i++) {
        stops.push({
          offset: offsets[i]!,
          color: generateRandomColor(),
          stopOpacity: randBetween(0.2, 1),
        });
      }

      return {
        id: Math.random().toString(),
        stops,
      };
    },
    generateSize = () => randBetween(300, 450),
    generatePath = (maxSize: number, fillId: string) => ({
      d: blob.svgPath({
        seed: Math.random(),
        extraPoints: randBetween(3, 8),
        randomness: randBetween(2, 5),
        size: randBetween(maxSize / 3, maxSize / 1.5),
      }),
      fillId,
    }),
    generateTransform = (size: number, i: number) => {
      switch (i) {
        case 1:
          return `transform: translate(${size / 2}px, 0)`;

        case 2:
          return `transform: translate(0, ${size / 2}px)`;
      }
    };
</script>

<script>
  const gradients = [generateGradient(), generateGradient(), generateGradient()],
    size = generateSize(),
    paths = Array(3)
      .fill(null)
      .map((_, i) => generatePath(size, gradients[i]?.id!));
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
  <defs>
    {#each gradients as { id, stops } (id)}
      <linearGradient {id}>
        {#each stops as { offset, color, stopOpacity }}
          <stop offset="{offset}%" stop-color={color} stop-opacity={stopOpacity} />
        {/each}
      </linearGradient>
    {/each}
  </defs>

  {#each paths as { d, fillId }, i}
    <path {d} fill="url(#{fillId})" style={generateTransform(size / 3, i)} />
  {/each}
</svg>
