import pandas as pd

df = pd.read_csv("hello.csv")

station_coords = (
    df.groupby("police_station")[["latitude", "longitude"]]
      .mean()
)

POLICE_STATIONS = {
    station: (
        row["latitude"],
        row["longitude"]
    )
    for station, row in station_coords.iterrows()
}

print("Loaded", len(POLICE_STATIONS), "Police Stations")

from math import radians, sin, cos, sqrt, atan2


def haversine(lat1, lon1, lat2, lon2):

    R = 6371

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)

    a = (
        sin(dlat / 2) ** 2
        + cos(radians(lat1))
        * cos(radians(lat2))
        * sin(dlon / 2) ** 2
    )

    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    return R * c


def get_nearest_police_station(lat, lon):

    nearest_station = None
    min_distance = float("inf")

    for station, (s_lat, s_lon) in POLICE_STATIONS.items():

        distance = haversine(
            lat,
            lon,
            s_lat,
            s_lon
        )

        if distance < min_distance:
            min_distance = distance
            nearest_station = station

    return nearest_station, round(min_distance, 2)

print(
    get_nearest_police_station(
        12.9716,
        77.5946
    )
)