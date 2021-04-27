<script context="module">
  import { svgPath } from '$utils/blobs';
  import { generateRandomColor } from '$utils/color';
  import { randBetween } from '$utils/random';

  const offsets = [0, 20, 70, 100],
    generateGradient = () => {
      const stops: { offset: number; color: string }[] = [];

      for (let i = 0; i < 4; i++) {
        stops.push({
          offset: offsets[i]!,
          color: generateRandomColor(),
        });
      }

      return {
        id: Math.random().toString(),
        rotate: randBetween(0, 180),
        stops,
      };
    },
    generateSize = () => randBetween(200, 250),
    generatePath = (size: number, fillId: string, shadowId?: string) => ({
      d: svgPath({
        seed: Math.random(),
        extraPoints: randBetween(3, 8),
        randomness: randBetween(2, 5),
        size,
      }),
      fillId,
      shadowId,
    }),
    generateTransform = (size: number, i: number) =>
      `transform: translate(${i == 1 ? size / 2 : 0}px, ${i == 2 ? size / 2 : 0}px)`;
</script>

<script>
  const gradients = [generateGradient(), generateGradient(), generateGradient()],
    size = generateSize(),
    paths = [
      generatePath(size, gradients[0]!.id!),
      generatePath(randBetween(size / 2, size / 1.1), gradients[1]!.id!),
      generatePath(randBetween(size / 2, size / 1.1), gradients[2]!.id!),
    ];
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
  <defs>
    {#each gradients as { id, stops, rotate } (id)}
      <linearGradient {id} gradientTransform="rotate({rotate})">
        {#each stops as { offset, color }}
          <stop offset="{offset}%" stop-color={color} />
        {/each}
      </linearGradient>
    {/each}
  </defs>

  {#each paths as { d, fillId, shadowId }, i}
    <path
      class:not-first={i > 0}
      {d}
      fill="url(#{fillId})"
      style={generateTransform(size / 3, i)} />
  {/each}
</svg>

<style>
  svg {
    overflow: visible;
    user-select: none;
  }

  .not-first {
    mix-blend-mode: hard-light;
  }
</style>
