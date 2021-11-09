const earthYearInSeconds = 31557600;

type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

const orbitalPeriodsInEarthYears: Record<Planet, number> = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const secondsLivedInEarthOrbit = (secondsLived: number): number =>
  secondsLived / earthYearInSeconds;

export const age = (planet: Planet, secondsLived: number) =>
  Number(
    (
      secondsLivedInEarthOrbit(secondsLived) /
      orbitalPeriodsInEarthYears[planet]
    ).toFixed(2)
  );
