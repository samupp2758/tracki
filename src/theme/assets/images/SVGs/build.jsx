import * as React from "react";
import Svg, { Path } from "react-native-svg";
const build = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M705-128 447-388q-23 8-46 13t-47 5q-97.083 0-165.042-67.667Q121-505.333 121-602q0-31 8.158-60.388Q137.316-691.777 152-718l145 145 92-86-149-149q25.915-15.158 54.957-23.579Q324-840 354-840q99.167 0 168.583 69.417Q592-701.167 592-602q0 24-5 47t-13 46l259 258q11 10.957 11 26.478Q844-209 833-198l-76 70q-10.696 11-25.848 11T705-128Zm28-57 40-40-273-273q16-21 24-49.5t8-54.5q0-75-55.5-127T350-782l101 103q9 9 9 22t-9 22L319-511q-9 9-22 9t-22-9l-97-96q3 77 54.668 127T354-430q25 0 53-8t49-24l277 277ZM476-484Z" />
  </Svg>
);
export default build;
