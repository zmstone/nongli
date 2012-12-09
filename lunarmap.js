
function LunarMap() {
}

LunarMap.rawMonthTable = function() {
  return [
[2000,  2,  5,  1],
[2000,  3,  6,  2],
[2000,  4,  5,  3],
[2000,  5,  4,  4],
[2000,  6,  2,  5],
[2000,  7,  2,  6],
[2000,  7, 31,  7],
[2000,  8, 29,  8],
[2000,  9, 28,  9],
[2000, 10, 27, 10],
[2000, 11, 26, 11],
[2000, 12, 26, 12],
[2001,  1, 24,  1],
[2001,  2, 23,  2],
[2001,  3, 25,  3],
[2001,  4, 23,  4],
[2001,  5, 23,  4],
[2001,  6, 21,  5],
[2001,  7, 21,  6],
[2001,  8, 19,  7],
[2001,  9, 17,  8],
[2001, 10, 17,  9],
[2001, 11, 15, 10],
[2001, 12, 15, 11],
[2002,  1, 13, 12],
[2002,  2, 12,  1],
[2002,  3, 14,  2],
[2002,  4, 13,  3],
[2002,  5, 12,  4],
[2002,  6, 11,  5],
[2002,  7, 10,  6],
[2002,  8,  9,  7],
[2002,  9,  7,  8],
[2002, 10,  6,  9],
[2002, 11,  5, 10],
[2002, 12,  4, 11],
[2003,  1,  3, 12],
[2003,  2,  1,  1],
[2003,  3,  3,  2],
[2003,  4,  2,  3],
[2003,  5,  1,  4],
[2003,  5, 31,  5],
[2003,  6, 30,  6],
[2003,  7, 29,  7],
[2003,  8, 28,  8],
[2003,  9, 26,  9],
[2003, 10, 25, 10],
[2003, 11, 24, 11],
[2003, 12, 23, 12],
[2004,  1, 22,  1],
[2004,  2, 20,  2],
[2004,  3, 21,  2],
[2004,  4, 19,  3],
[2004,  5, 19,  4],
[2004,  6, 18,  5],
[2004,  7, 17,  6],
[2004,  8, 16,  7],
[2004,  9, 14,  8],
[2004, 10, 14,  9],
[2004, 11, 12, 10],
[2004, 12, 12, 11],
[2005,  1, 10, 12],
[2005,  2,  9,  1],
[2005,  3, 10,  2],
[2005,  4,  9,  3],
[2005,  5,  8,  4],
[2005,  6,  7,  5],
[2005,  7,  6,  6],
[2005,  8,  5,  7],
[2005,  9,  4,  8],
[2005, 10,  3,  9],
[2005, 11,  2, 10],
[2005, 12,  1, 11],
[2005, 12, 31, 12],
[2006,  1, 29,  1],
[2006,  2, 28,  2],
[2006,  3, 29,  3],
[2006,  4, 28,  4],
[2006,  5, 27,  5],
[2006,  6, 26,  6],
[2006,  7, 25,  7],
[2006,  8, 24,  7],
[2006,  9, 22,  8],
[2006, 10, 22,  9],
[2006, 11, 21, 10],
[2006, 12, 20, 11],
[2007,  1, 19, 12],
[2007,  2, 18,  1],
[2007,  3, 19,  2],
[2007,  4, 17,  3],
[2007,  5, 17,  4],
[2007,  6, 15,  5],
[2007,  7, 14,  6],
[2007,  8, 13,  7],
[2007,  9, 11,  8],
[2007, 10, 11,  9],
[2007, 11, 10, 10],
[2007, 12, 10, 11],
[2008,  1,  8, 12],
[2008,  2,  7,  1],
[2008,  3,  8,  2],
[2008,  4,  6,  3],
[2008,  5,  5,  4],
[2008,  6,  4,  5],
[2008,  7,  3,  6],
[2008,  8,  1,  7],
[2008,  8, 31,  8],
[2008,  9, 29,  9],
[2008, 10, 29, 10],
[2008, 11, 28, 11],
[2008, 12, 27, 12],
[2009,  1, 26,  1],
[2009,  2, 25,  2],
[2009,  3, 27,  3],
[2009,  4, 25,  4],
[2009,  5, 24,  5],
[2009,  6, 23,  5],
[2009,  7, 22,  6],
[2009,  8, 20,  7],
[2009,  9, 19,  8],
[2009, 10, 18,  9],
[2009, 11, 17, 10],
[2009, 12, 16, 11],
[2010,  1, 15, 12],
[2010,  2, 14,  1],
[2010,  3, 16,  2],
[2010,  4, 14,  3],
[2010,  5, 14,  4],
[2010,  6, 12,  5],
[2010,  7, 12,  6],
[2010,  8, 10,  7],
[2010,  9,  8,  8],
[2010, 10,  8,  9],
[2010, 11,  6, 10],
[2010, 12,  6, 11],
[2011,  1,  4, 12],
[2011,  2,  3,  1],
[2011,  3,  5,  2],
[2011,  4,  3,  3],
[2011,  5,  3,  4],
[2011,  6,  2,  5],
[2011,  7,  1,  6],
[2011,  7, 31,  7],
[2011,  8, 29,  8],
[2011,  9, 27,  9],
[2011, 10, 27, 10],
[2011, 11, 25, 11],
[2011, 12, 25, 12],
[2012,  1, 23,  1],
[2012,  2, 22,  2],
[2012,  3, 22,  3],
[2012,  4, 21,  4],
[2012,  5, 21,  4],
[2012,  6, 19,  5],
[2012,  7, 19,  6],
[2012,  8, 17,  7],
[2012,  9, 16,  8],
[2012, 10, 15,  9],
[2012, 11, 14, 10],
[2012, 12, 13, 11],
[2013,  1, 12, 12],
[2013,  2, 10,  1],
[2013,  3, 12,  2],
[2013,  4, 10,  3],
[2013,  5, 10,  4],
[2013,  6,  8,  5],
[2013,  7,  8,  6],
[2013,  8,  7,  7],
[2013,  9,  5,  8],
[2013, 10,  5,  9],
[2013, 11,  3, 10],
[2013, 12,  3, 11],
[2014,  1,  1, 12],
[2014,  1, 31,  1],
[2014,  3,  1,  2],
[2014,  3, 31,  3],
[2014,  4, 29,  4],
[2014,  5, 29,  5],
[2014,  6, 27,  6],
[2014,  7, 27,  7],
[2014,  8, 25,  8],
[2014,  9, 24,  9],
[2014, 10, 24,  9],
[2014, 11, 22, 10],
[2014, 12, 22, 11],
[2015,  1, 20, 12],
[2015,  2, 19,  1],
[2015,  3, 20,  2],
[2015,  4, 19,  3],
[2015,  5, 18,  4],
[2015,  6, 16,  5],
[2015,  7, 16,  6],
[2015,  8, 14,  7],
[2015,  9, 13,  8],
[2015, 10, 13,  9],
[2015, 11, 12, 10],
[2015, 12, 11, 11],
[2016,  1, 10, 12],
[2016,  2,  8,  1],
[2016,  3,  9,  2],
[2016,  4,  7,  3],
[2016,  5,  7,  4],
[2016,  6,  5,  5],
[2016,  7,  4,  6],
[2016,  8,  3,  7],
[2016,  9,  1,  8],
[2016, 10,  1,  9],
[2016, 10, 31, 10],
[2016, 11, 29, 11],
[2016, 12, 29, 12],
[2017,  1, 28,  1],
[2017,  2, 26,  2],
[2017,  3, 28,  3],
[2017,  4, 26,  4],
[2017,  5, 26,  5],
[2017,  6, 24,  6],
[2017,  7, 23,  6],
[2017,  8, 22,  7],
[2017,  9, 20,  8],
[2017, 10, 20,  9],
[2017, 11, 18, 10],
[2017, 12, 18, 11],
[2018,  1, 17, 12],
[2018,  2, 16,  1],
[2018,  3, 17,  2],
[2018,  4, 16,  3],
[2018,  5, 15,  4],
[2018,  6, 14,  5],
[2018,  7, 13,  6],
[2018,  8, 11,  7],
[2018,  9, 10,  8],
[2018, 10,  9,  9],
[2018, 11,  8, 10],
[2018, 12,  7, 11],
[2019,  1,  6, 12],
[2019,  2,  5,  1],
[2019,  3,  7,  2],
[2019,  4,  5,  3],
[2019,  5,  5,  4],
[2019,  6,  3,  5],
[2019,  7,  3,  6],
[2019,  8,  1,  7],
[2019,  8, 30,  8],
[2019,  9, 29,  9],
[2019, 10, 28, 10],
[2019, 11, 26, 11],
[2019, 12, 26, 12],
[2020,  1, 25,  1],
[2020,  2, 23,  2],
[2020,  3, 24,  3],
[2020,  4, 23,  4],
[2020,  5, 23,  4],
[2020,  6, 21,  5],
[2020,  7, 21,  6],
[2020,  8, 19,  7],
[2020,  9, 17,  8],
[2020, 10, 17,  9],
[2020, 11, 15, 10],
[2020, 12, 15, 11],
[2021,  1, 13, 12],
[2021,  2, 12,  1],
[2021,  3, 13,  2],
[2021,  4, 12,  3],
[2021,  5, 12,  4],
[2021,  6, 10,  5],
[2021,  7, 10,  6],
[2021,  8,  8,  7],
[2021,  9,  7,  8],
[2021, 10,  6,  9],
[2021, 11,  5, 10],
[2021, 12,  4, 11],
[2022,  1,  3, 12],
[2022,  2,  1,  1],
[2022,  3,  3,  2],
[2022,  4,  1,  3],
[2022,  5,  1,  4],
[2022,  5, 30,  5],
[2022,  6, 29,  6],
[2022,  7, 29,  7],
[2022,  8, 27,  8],
[2022,  9, 26,  9],
[2022, 10, 25, 10],
[2022, 11, 24, 11],
[2022, 12, 23, 12],
[2023,  1, 22,  1],
[2023,  2, 20,  2],
[2023,  3, 22,  2],
[2023,  4, 20,  3],
[2023,  5, 19,  4],
[2023,  6, 18,  5],
[2023,  7, 18,  6],
[2023,  8, 16,  7],
[2023,  9, 15,  8],
[2023, 10, 15,  9],
[2023, 11, 13, 10],
[2023, 12, 12, 11],
[2024,  1, 11, 12],
[2024,  2, 10,  1],
[2024,  3, 10,  2],
[2024,  4,  9,  3],
[2024,  5,  8,  4],
[2024,  6,  6,  5],
[2024,  7,  6,  6],
[2024,  8,  4,  7],
[2024,  9,  3,  8],
[2024, 10,  3,  9],
[2024, 11,  1, 10],
[2024, 12,  1, 11],
[2024, 12, 31, 12],
[2025,  1, 29,  1],
[2025,  2, 28,  2],
[2025,  3, 29,  3],
[2025,  4, 28,  4],
[2025,  5, 27,  5],
[2025,  6, 25,  6],
[2025,  7, 25,  6],
[2025,  8, 23,  7],
[2025,  9, 22,  8],
[2025, 10, 21,  9],
[2025, 11, 20, 10],
[2025, 12, 20, 11],
[2026,  1, 19, 12],
[2026,  2, 17,  1],
[2026,  3, 19,  2],
[2026,  4, 17,  3],
[2026,  5, 17,  4],
[2026,  6, 15,  5],
[2026,  7, 14,  6],
[2026,  8, 13,  7],
[2026,  9, 11,  8],
[2026, 10, 10,  9],
[2026, 11,  9, 10],
[2026, 12,  9, 11],
[2027,  1,  8, 12],
[2027,  2,  6,  1],
[2027,  3,  8,  2],
[2027,  4,  7,  3],
[2027,  5,  6,  4],
[2027,  6,  5,  5],
[2027,  7,  4,  6],
[2027,  8,  2,  7],
[2027,  9,  1,  8],
[2027,  9, 30,  9],
[2027, 10, 29, 10],
[2027, 11, 28, 11],
[2027, 12, 28, 12],
[2028,  1, 26,  1],
[2028,  2, 25,  2],
[2028,  3, 26,  3],
[2028,  4, 25,  4],
[2028,  5, 24,  5],
[2028,  6, 23,  5],
[2028,  7, 22,  6],
[2028,  8, 20,  7],
[2028,  9, 19,  8],
[2028, 10, 18,  9],
[2028, 11, 16, 10],
[2028, 12, 16, 11],
[2029,  1, 15, 12],
[2029,  2, 13,  1],
[2029,  3, 15,  2],
[2029,  4, 14,  3],
[2029,  5, 13,  4],
[2029,  6, 12,  5],
[2029,  7, 11,  6],
[2029,  8, 10,  7],
[2029,  9,  8,  8],
[2029, 10,  8,  9],
[2029, 11,  6, 10],
[2029, 12,  5, 11],
[2030,  1,  4, 12],
[2030,  2,  3,  1],
[2030,  3,  4,  2],
[2030,  4,  3,  3],
[2030,  5,  2,  4],
[2030,  6,  1,  5],
[2030,  7,  1,  6],
[2030,  7, 30,  7],
[2030,  8, 29,  8],
[2030,  9, 27,  9],
[2030, 10, 27, 10],
[2030, 11, 25, 11],
[2030, 12, 25, 12],
[2031,  1, 23,  1],
[2031,  2, 21,  2],
[2031,  3, 23,  3],
[2031,  4, 22,  3],
[2031,  5, 21,  4],
[2031,  6, 20,  5],
[2031,  7, 19,  6],
[2031,  8, 18,  7],
[2031,  9, 17,  8],
[2031, 10, 16,  9],
[2031, 11, 15, 10],
[2031, 12, 14, 11],
[2032,  1, 13, 12],
[2032,  2, 11,  1],
[2032,  3, 12,  2],
[2032,  4, 10,  3],
[2032,  5,  9,  4],
[2032,  6,  8,  5],
[2032,  7,  7,  6],
[2032,  8,  6,  7],
[2032,  9,  5,  8],
[2032, 10,  4,  9],
[2032, 11,  3, 10],
[2032, 12,  3, 11],
[2033,  1,  1, 12],
[2033,  1, 31,  1],
[2033,  3,  1,  2],
[2033,  3, 31,  3],
[2033,  4, 29,  4],
[2033,  5, 28,  5],
[2033,  6, 27,  6],
[2033,  7, 26,  7],
[2033,  8, 25,  8],
[2033,  9, 23,  9],
[2033, 10, 23, 10],
[2033, 11, 22, 11],
[2033, 12, 22, 11],
[2034,  1, 20, 12],
[2034,  2, 19,  1],
[2034,  3, 20,  2],
[2034,  4, 19,  3],
[2034,  5, 18,  4],
[2034,  6, 16,  5],
[2034,  7, 16,  6],
[2034,  8, 14,  7],
[2034,  9, 13,  8],
[2034, 10, 12,  9],
[2034, 11, 11, 10],
[2034, 12, 11, 11],
[2035,  1,  9, 12],
[2035,  2,  8,  1],
[2035,  3, 10,  2],
[2035,  4,  8,  3],
[2035,  5,  8,  4],
[2035,  6,  6,  5],
[2035,  7,  5,  6],
[2035,  8,  4,  7],
[2035,  9,  2,  8],
[2035, 10,  1,  9],
[2035, 10, 31, 10],
[2035, 11, 30, 11],
[2035, 12, 29, 12],
[2036,  1, 28,  1],
[2036,  2, 27,  2],
[2036,  3, 28,  3],
[2036,  4, 26,  4],
[2036,  5, 26,  5],
[2036,  6, 24,  6],
[2036,  7, 23,  6],
[2036,  8, 22,  7],
[2036,  9, 20,  8],
[2036, 10, 19,  9],
[2036, 11, 18, 10],
[2036, 12, 17, 11],
[2037,  1, 16, 12],
[2037,  2, 15,  1],
[2037,  3, 17,  2],
[2037,  4, 16,  3],
[2037,  5, 15,  4],
[2037,  6, 14,  5],
[2037,  7, 13,  6],
[2037,  8, 11,  7],
[2037,  9, 10,  8],
[2037, 10,  9,  9],
[2037, 11,  7, 10],
[2037, 12,  7, 11],
[2038,  1,  5, 12],
[2038,  2,  4,  1],
[2038,  3,  6,  2],
[2038,  4,  5,  3],
[2038,  5,  4,  4],
[2038,  6,  3,  5],
[2038,  7,  2,  6],
[2038,  8,  1,  7],
[2038,  8, 30,  8],
[2038,  9, 29,  9],
[2038, 10, 28, 10],
[2038, 11, 26, 11],
[2038, 12, 26, 12],
[2039,  1, 24,  1],
[2039,  2, 23,  2],
[2039,  3, 24,  3],
[2039,  4, 23,  4],
[2039,  5, 23,  5],
[2039,  6, 22,  5],
[2039,  7, 21,  6],
[2039,  8, 20,  7],
[2039,  9, 18,  8],
[2039, 10, 18,  9],
[2039, 11, 16, 10],
[2039, 12, 16, 11],
[2040,  1, 14, 12],
[2040,  2, 12,  1],
[2040,  3, 13,  2],
[2040,  4, 11,  3],
[2040,  5, 11,  4],
[2040,  6, 10,  5],
[2040,  7,  9,  6],
[2040,  8,  8,  7],
[2040,  9,  6,  8],
[2040, 10,  6,  9],
[2040, 11,  5, 10],
[2040, 12,  4, 11],
[2041,  1,  3, 12],
[2041,  2,  1,  1],
[2041,  3,  2,  2],
[2041,  4,  1,  3],
[2041,  4, 30,  4],
[2041,  5, 30,  5],
[2041,  6, 28,  6],
[2041,  7, 28,  7],
[2041,  8, 27,  8],
[2041,  9, 25,  9],
[2041, 10, 25, 10],
[2041, 11, 24, 11],
[2041, 12, 23, 12],
[2042,  1, 22,  1],
[2042,  2, 20,  2],
[2042,  3, 22,  2],
[2042,  4, 20,  3],
[2042,  5, 19,  4],
[2042,  6, 18,  5],
[2042,  7, 17,  6],
[2042,  8, 16,  7],
[2042,  9, 14,  8],
[2042, 10, 14,  9],
[2042, 11, 13, 10],
[2042, 12, 12, 11],
[2043,  1, 11, 12],
[2043,  2, 10,  1],
[2043,  3, 11,  2],
[2043,  4, 10,  3],
[2043,  5,  9,  4],
[2043,  6,  7,  5],
[2043,  7,  7,  6],
[2043,  8,  5,  7],
[2043,  9,  3,  8],
[2043, 10,  3,  9],
[2043, 11,  2, 10],
[2043, 12,  1, 11],
[2043, 12, 31, 12],
[2044,  1, 30,  1],
[2044,  2, 29,  2],
[2044,  3, 29,  3],
[2044,  4, 28,  4],
[2044,  5, 27,  5],
[2044,  6, 25,  6],
[2044,  7, 25,  7],
[2044,  8, 23,  7],
[2044,  9, 21,  8],
[2044, 10, 21,  9],
[2044, 11, 19, 10],
[2044, 12, 19, 11],
[2045,  1, 18, 12],
[2045,  2, 17,  1],
[2045,  3, 19,  2],
[2045,  4, 17,  3],
[2045,  5, 17,  4],
[2045,  6, 15,  5],
[2045,  7, 14,  6],
[2045,  8, 13,  7],
[2045,  9, 11,  8],
[2045, 10, 10,  9],
[2045, 11,  9, 10],
[2045, 12,  8, 11],
[2046,  1,  7, 12],
[2046,  2,  6,  1],
[2046,  3,  8,  2],
[2046,  4,  6,  3],
[2046,  5,  6,  4],
[2046,  6,  4,  5],
[2046,  7,  4,  6],
[2046,  8,  2,  7],
[2046,  9,  1,  8],
[2046,  9, 30,  9],
[2046, 10, 29, 10],
[2046, 11, 28, 11],
[2046, 12, 27, 12],
[2047,  1, 26,  1],
[2047,  2, 25,  2],
[2047,  3, 26,  3],
[2047,  4, 25,  4],
[2047,  5, 25,  5],
[2047,  6, 23,  5],
[2047,  7, 23,  6],
[2047,  8, 21,  7],
[2047,  9, 20,  8],
[2047, 10, 19,  9],
[2047, 11, 17, 10],
[2047, 12, 17, 11],
[2048,  1, 15, 12],
[2048,  2, 14,  1],
[2048,  3, 14,  2],
[2048,  4, 13,  3],
[2048,  5, 13,  4],
[2048,  6, 11,  5],
[2048,  7, 11,  6],
[2048,  8, 10,  7],
[2048,  9,  8,  8],
[2048, 10,  8,  9],
[2048, 11,  6, 10],
[2048, 12,  5, 11],
[2049,  1,  4, 12],
[2049,  2,  2,  1],
[2049,  3,  4,  2],
[2049,  4,  2,  3],
[2049,  5,  2,  4],
[2049,  5, 31,  5],
[2049,  6, 30,  6],
[2049,  7, 30,  7],
[2049,  8, 28,  8],
[2049,  9, 27,  9],
[2049, 10, 27, 10],
[2049, 11, 25, 11],
[2049, 12, 25, 12],
[2050,  1, 23,  1],
[2050,  2, 21,  2],
[2050,  3, 23,  3],
[2050,  4, 21,  3],
[2050,  5, 21,  4],
[2050,  6, 19,  5],
[2050,  7, 19,  6],
[2050,  8, 17,  7],
[2050,  9, 16,  8],
[2050, 10, 16,  9],
[2050, 11, 14, 10],
[2050, 12, 14, 11],
[2051,  1, 13, 12],
[2051,  2, 11,  1],
[2051,  3, 13,  2],
[2051,  4, 11,  3],
[2051,  5, 10,  4],
[2051,  6,  9,  5],
[2051,  7,  8,  6],
[2051,  8,  6,  7],
[2051,  9,  5,  8],
[2051, 10,  5,  9],
[2051, 11,  3, 10],
[2051, 12,  3, 11],
[2052,  1,  2, 12],
[2052,  2,  1,  1],
[2052,  3,  1,  2],
[2052,  3, 31,  3],
[2052,  4, 29,  4],
[2052,  5, 28,  5],
[2052,  6, 27,  6],
[2052,  7, 26,  7],
[2052,  8, 24,  8],
[2052,  9, 23,  8],
[2052, 10, 22,  9],
[2052, 11, 21, 10],
[2052, 12, 21, 11],
[2053,  1, 20, 12],
[2053,  2, 19,  1],
[2053,  3, 20,  2],
[2053,  4, 19,  3],
[2053,  5, 18,  4],
[2053,  6, 16,  5],
[2053,  7, 16,  6],
[2053,  8, 14,  7],
[2053,  9, 12,  8],
[2053, 10, 12,  9],
[2053, 11, 10, 10],
[2053, 12, 10, 11],
[2054,  1,  9, 12],
[2054,  2,  8,  1],
[2054,  3,  9,  2],
[2054,  4,  8,  3],
[2054,  5,  8,  4],
[2054,  6,  6,  5],
[2054,  7,  5,  6],
[2054,  8,  4,  7],
[2054,  9,  2,  8],
[2054, 10,  1,  9],
[2054, 10, 31, 10],
[2054, 11, 29, 11],
[2054, 12, 29, 12],
[2055,  1, 28,  1],
[2055,  2, 26,  2],
[2055,  3, 28,  3],
[2055,  4, 27,  4],
[2055,  5, 26,  5],
[2055,  6, 25,  6],
[2055,  7, 24,  6],
[2055,  8, 23,  7],
[2055,  9, 21,  8],
[2055, 10, 20,  9],
[2055, 11, 19, 10],
[2055, 12, 18, 11],
[2056,  1, 17, 12],
[2056,  2, 15,  1],
[2056,  3, 16,  2],
[2056,  4, 15,  3],
[2056,  5, 15,  4],
[2056,  6, 13,  5],
[2056,  7, 13,  6],
[2056,  8, 11,  7],
[2056,  9, 10,  8],
[2056, 10,  9,  9],
[2056, 11,  7, 10],
[2056, 12,  7, 11],
[2057,  1,  5, 12],
[2057,  2,  4,  1],
[2057,  3,  5,  2],
[2057,  4,  4,  3],
[2057,  5,  4,  4],
[2057,  6,  2,  5],
[2057,  7,  2,  6],
[2057,  7, 31,  7],
[2057,  8, 30,  8],
[2057,  9, 28,  9],
[2057, 10, 28, 10],
[2057, 11, 26, 11],
[2057, 12, 26, 12],
[2058,  1, 24,  1],
[2058,  2, 23,  2],
[2058,  3, 24,  3],
[2058,  4, 23,  4],
[2058,  5, 22,  4],
[2058,  6, 21,  5],
[2058,  7, 20,  6],
[2058,  8, 19,  7],
[2058,  9, 18,  8],
[2058, 10, 17,  9],
[2058, 11, 16, 10],
[2058, 12, 16, 11],
[2059,  1, 14, 12],
[2059,  2, 12,  1],
[2059,  3, 14,  2],
[2059,  4, 12,  3],
[2059,  5, 12,  4],
[2059,  6, 10,  5],
[2059,  7, 10,  6],
[2059,  8,  8,  7],
[2059,  9,  7,  8],
[2059, 10,  6,  9],
[2059, 11,  5, 10],
[2059, 12,  5, 11],
[2060,  1,  4, 12],
[2060,  2,  2,  1],
[2060,  3,  3,  2],
[2060,  4,  1,  3],
[2060,  4, 30,  4],
[2060,  5, 30,  5],
[2060,  6, 28,  6],
[2060,  7, 27,  7],
[2060,  8, 26,  8],
[2060,  9, 24,  9],
[2060, 10, 24, 10],
[2060, 11, 23, 11],
[2060, 12, 23, 12],
[2061,  1, 21,  1],
[2061,  2, 20,  2],
[2061,  3, 22,  3],
[2061,  4, 20,  3],
[2061,  5, 19,  4],
[2061,  6, 18,  5],
[2061,  7, 17,  6],
[2061,  8, 15,  7],
[2061,  9, 14,  8],
[2061, 10, 13,  9],
[2061, 11, 12, 10],
[2061, 12, 12, 11],
[2062,  1, 11, 12],
[2062,  2,  9,  1],
[2062,  3, 11,  2],
[2062,  4, 10,  3],
[2062,  5,  9,  4],
[2062,  6,  7,  5],
[2062,  7,  7,  6],
[2062,  8,  5,  7],
[2062,  9,  3,  8],
[2062, 10,  3,  9],
[2062, 11,  1, 10],
[2062, 12,  1, 11],
[2063,  1, 29,  1],
[2063,  2, 28,  2],
[2063,  3, 30,  3],
[2063,  4, 28,  4],
[2063,  5, 28,  5],
[2063,  6, 26,  6],
[2063,  7, 26,  7],
[2063,  8, 24,  7],
[2063,  9, 22,  8],
[2063, 10, 22,  9],
[2063, 11, 20, 10],
[2063, 12, 20, 11],
[2064,  1, 18, 12],
[2064,  2, 17,  1],
[2064,  3, 18,  2],
[2064,  4, 17,  3],
[2064,  5, 16,  4],
[2064,  6, 15,  5],
[2064,  7, 14,  6],
[2064,  8, 13,  7],
[2064,  9, 11,  8],
[2064, 10, 10,  9],
[2064, 11,  9, 10],
[2064, 12,  8, 11],
[2065,  1,  7, 12],
[2065,  2,  5,  1],
[2065,  3,  7,  2],
[2065,  4,  6,  3],
[2065,  5,  5,  4],
[2065,  6,  4,  5],
[2065,  7,  4,  6],
[2065,  8,  2,  7],
[2065,  9,  1,  8],
[2065,  9, 30,  9],
[2065, 10, 29, 10],
[2065, 11, 28, 11],
[2065, 12, 27, 12],
[2066,  1, 26,  1],
[2066,  2, 24,  2],
[2066,  3, 26,  3],
[2066,  4, 24,  4],
[2066,  5, 24,  5],
[2066,  6, 23,  5],
[2066,  7, 22,  6],
[2066,  8, 21,  7],
[2066,  9, 19,  8],
[2066, 10, 19,  9],
[2066, 11, 17, 10],
[2066, 12, 17, 11],
[2067,  1, 15, 12],
[2067,  2, 14,  1],
[2067,  3, 15,  2],
[2067,  4, 14,  3],
[2067,  5, 13,  4],
[2067,  6, 12,  5],
[2067,  7, 11,  6],
[2067,  8, 10,  7],
[2067,  9,  9,  8],
[2067, 10,  8,  9],
[2067, 11,  7, 10],
[2067, 12,  6, 11],
[2068,  1,  5, 12],
[2068,  2,  3,  1],
[2068,  3,  4,  2],
[2068,  4,  2,  3],
[2068,  5,  2,  4],
[2068,  5, 31,  5],
[2068,  6, 29,  6],
[2068,  7, 29,  7],
[2068,  8, 28,  8],
[2068,  9, 26,  9],
[2068, 10, 26, 10],
[2068, 11, 25, 11],
[2068, 12, 24, 12],
[2069,  1, 23,  1],
[2069,  2, 21,  2],
[2069,  3, 23,  3],
[2069,  4, 21,  4],
[2069,  5, 21,  4],
[2069,  6, 19,  5],
[2069,  7, 18,  6],
[2069,  8, 17,  7],
[2069,  9, 15,  8],
[2069, 10, 15,  9],
[2069, 11, 14, 10],
[2069, 12, 14, 11],
[2070,  1, 12, 12],
[2070,  2, 11,  1],
[2070,  3, 12,  2],
[2070,  4, 11,  3],
[2070,  5, 10,  4],
[2070,  6,  9,  5],
[2070,  7,  8,  6],
[2070,  8,  6,  7],
[2070,  9,  5,  8],
[2070, 10,  4,  9],
[2070, 11,  3, 10],
[2070, 12,  3, 11],
[2071,  1,  1, 12],
[2071,  1, 31,  1],
[2071,  3,  2,  2],
[2071,  3, 31,  3],
[2071,  4, 30,  4],
[2071,  5, 29,  5],
[2071,  6, 28,  6],
[2071,  7, 27,  7],
[2071,  8, 25,  8],
[2071,  9, 24,  8],
[2071, 10, 23,  9],
[2071, 11, 22, 10],
[2071, 12, 21, 11],
[2072,  1, 20, 12],
[2072,  2, 19,  1],
[2072,  3, 20,  2],
[2072,  4, 18,  3],
[2072,  5, 18,  4],
[2072,  6, 16,  5],
[2072,  7, 16,  6],
[2072,  8, 14,  7],
[2072,  9, 12,  8],
[2072, 10, 12,  9],
[2072, 11, 10, 10],
[2072, 12, 10, 11],
[2073,  1,  8, 12],
[2073,  2,  7,  1],
[2073,  3,  9,  2],
[2073,  4,  7,  3],
[2073,  5,  7,  4],
[2073,  6,  6,  5],
[2073,  7,  5,  6],
[2073,  8,  4,  7],
[2073,  9,  2,  8],
[2073, 10,  1,  9],
[2073, 10, 31, 10],
[2073, 11, 29, 11],
[2073, 12, 29, 12],
[2074,  1, 27,  1],
[2074,  2, 26,  2],
[2074,  3, 27,  3],
[2074,  4, 26,  4],
[2074,  5, 26,  5],
[2074,  6, 24,  6],
[2074,  7, 24,  6],
[2074,  8, 22,  7],
[2074,  9, 21,  8],
[2074, 10, 20,  9],
[2074, 11, 19, 10],
[2074, 12, 18, 11],
[2075,  1, 17, 12],
[2075,  2, 15,  1],
[2075,  3, 17,  2],
[2075,  4, 15,  3],
[2075,  5, 15,  4],
[2075,  6, 13,  5],
[2075,  7, 13,  6],
[2075,  8, 12,  7],
[2075,  9, 10,  8],
[2075, 10, 10,  9],
[2075, 11,  8, 10],
[2075, 12,  8, 11],
[2076,  1,  6, 12],
[2076,  2,  5,  1],
[2076,  3,  5,  2],
[2076,  4,  4,  3],
[2076,  5,  3,  4],
[2076,  6,  2,  5],
[2076,  7,  1,  6],
[2076,  7, 31,  7],
[2076,  8, 29,  8],
[2076,  9, 28,  9],
[2076, 10, 28, 10],
[2076, 11, 26, 11],
[2076, 12, 26, 12],
[2077,  1, 24,  1],
[2077,  2, 23,  2],
[2077,  3, 24,  3],
[2077,  4, 23,  4],
[2077,  5, 22,  4],
[2077,  6, 20,  5],
[2077,  7, 20,  6],
[2077,  8, 18,  7],
[2077,  9, 17,  8],
[2077, 10, 17,  9],
[2077, 11, 16, 10],
[2077, 12, 15, 11],
[2078,  1, 14, 12],
[2078,  2, 12,  1],
[2078,  3, 14,  2],
[2078,  4, 12,  3],
[2078,  5, 12,  4],
[2078,  6, 10,  5],
[2078,  7,  9,  6],
[2078,  8,  8,  7],
[2078,  9,  6,  8],
[2078, 10,  6,  9],
[2078, 11,  5, 10],
[2078, 12,  4, 11],
[2079,  1,  3, 12],
[2079,  2,  2,  1],
[2079,  3,  3,  2],
[2079,  4,  2,  3],
[2079,  5,  1,  4],
[2079,  5, 31,  5],
[2079,  6, 29,  6],
[2079,  7, 28,  7],
[2079,  8, 27,  8],
[2079,  9, 25,  9],
[2079, 10, 25, 10],
[2079, 11, 23, 11],
[2079, 12, 23, 12],
[2080,  1, 22,  1],
[2080,  2, 21,  2],
[2080,  3, 21,  3],
[2080,  4, 20,  3],
[2080,  5, 19,  4],
[2080,  6, 18,  5],
[2080,  7, 17,  6],
[2080,  8, 15,  7],
[2080,  9, 14,  8],
[2080, 10, 13,  9],
[2080, 11, 11, 10],
[2080, 12, 11, 11],
[2081,  1, 10, 12],
[2081,  2,  9,  1],
[2081,  3, 10,  2],
[2081,  4,  9,  3],
[2081,  5,  9,  4],
[2081,  6,  7,  5],
[2081,  7,  7,  6],
[2081,  8,  5,  7],
[2081,  9,  3,  8],
[2081, 10,  3,  9],
[2081, 11,  1, 10],
[2081, 11, 30, 11],
[2081, 12, 30, 12],
[2082,  1, 29,  1],
[2082,  2, 27,  2],
[2082,  3, 29,  3],
[2082,  4, 28,  4],
[2082,  5, 28,  5],
[2082,  6, 26,  6],
[2082,  7, 25,  7],
[2082,  8, 24,  7],
[2082,  9, 22,  8],
[2082, 10, 22,  9],
[2082, 11, 20, 10],
[2082, 12, 19, 11],
[2083,  1, 18, 12],
[2083,  2, 17,  1],
[2083,  3, 18,  2],
[2083,  4, 17,  3],
[2083,  5, 17,  4],
[2083,  6, 15,  5],
[2083,  7, 15,  6],
[2083,  8, 13,  7],
[2083,  9, 12,  8],
[2083, 10, 11,  9],
[2083, 11, 10, 10],
[2083, 12,  9, 11],
[2084,  1,  8, 12],
[2084,  2,  6,  1],
[2084,  3,  7,  2],
[2084,  4,  5,  3],
[2084,  5,  5,  4],
[2084,  6,  3,  5],
[2084,  7,  3,  6],
[2084,  8,  2,  7],
[2084,  8, 31,  8],
[2084,  9, 30,  9],
[2084, 10, 29, 10],
[2084, 11, 28, 11],
[2084, 12, 27, 12],
[2085,  1, 26,  1],
[2085,  2, 24,  2],
[2085,  3, 26,  3],
[2085,  4, 24,  4],
[2085,  5, 23,  5],
[2085,  6, 22,  5],
[2085,  7, 22,  6],
[2085,  8, 20,  7],
[2085,  9, 19,  8],
[2085, 10, 19,  9],
[2085, 11, 17, 10],
[2085, 12, 17, 11],
[2086,  1, 15, 12],
[2086,  2, 14,  1],
[2086,  3, 15,  2],
[2086,  4, 14,  3],
[2086,  5, 13,  4],
[2086,  6, 11,  5],
[2086,  7, 11,  6],
[2086,  8,  9,  7],
[2086,  9,  8,  8],
[2086, 10,  8,  9],
[2086, 11,  6, 10],
[2086, 12,  6, 11],
[2087,  1,  5, 12],
[2087,  2,  3,  1],
[2087,  3,  5,  2],
[2087,  4,  3,  3],
[2087,  5,  3,  4],
[2087,  6,  1,  5],
[2087,  6, 30,  6],
[2087,  7, 30,  7],
[2087,  8, 28,  8],
[2087,  9, 27,  9],
[2087, 10, 26, 10],
[2087, 11, 25, 11],
[2087, 12, 25, 12],
[2088,  1, 24,  1],
[2088,  2, 22,  2],
[2088,  3, 23,  3],
[2088,  4, 21,  4],
[2088,  5, 21,  4],
[2088,  6, 19,  5],
[2088,  7, 18,  6],
[2088,  8, 17,  7],
[2088,  9, 15,  8],
[2088, 10, 14,  9],
[2088, 11, 13, 10],
[2088, 12, 13, 11],
[2089,  1, 12, 12],
[2089,  2, 10,  1],
[2089,  3, 12,  2],
[2089,  4, 11,  3],
[2089,  5, 10,  4],
[2089,  6,  9,  5],
[2089,  7,  8,  6],
[2089,  8,  6,  7],
[2089,  9,  4,  8],
[2089, 10,  4,  9],
[2089, 11,  2, 10],
[2089, 12,  2, 11],
[2090,  1,  1, 12],
[2090,  1, 30,  1],
[2090,  3,  1,  2],
[2090,  3, 31,  3],
[2090,  4, 30,  4],
[2090,  5, 29,  5],
[2090,  6, 28,  6],
[2090,  7, 27,  7],
[2090,  8, 25,  8],
[2090,  9, 24,  8],
[2090, 10, 23,  9],
[2090, 11, 21, 10],
[2090, 12, 21, 11],
[2091,  1, 20, 12],
[2091,  2, 18,  1],
[2091,  3, 20,  2],
[2091,  4, 19,  3],
[2091,  5, 18,  4],
[2091,  6, 17,  5],
[2091,  7, 16,  6],
[2091,  8, 15,  7],
[2091,  9, 13,  8],
[2091, 10, 13,  9],
[2091, 11, 11, 10],
[2091, 12, 10, 11],
[2092,  1,  9, 12],
[2092,  2,  7,  1],
[2092,  3,  8,  2],
[2092,  4,  7,  3],
[2092,  5,  6,  4],
[2092,  6,  5,  5],
[2092,  7,  5,  6],
[2092,  8,  3,  7],
[2092,  9,  2,  8],
[2092, 10,  1,  9],
[2092, 10, 31, 10],
[2092, 11, 29, 11],
[2092, 12, 29, 12],
[2093,  1, 27,  1],
[2093,  2, 25,  2],
[2093,  3, 27,  3],
[2093,  4, 26,  4],
[2093,  5, 25,  5],
[2093,  6, 24,  6],
[2093,  7, 23,  6],
[2093,  8, 22,  7],
[2093,  9, 21,  8],
[2093, 10, 20,  9],
[2093, 11, 19, 10],
[2093, 12, 18, 11],
[2094,  1, 17, 12],
[2094,  2, 15,  1],
[2094,  3, 16,  2],
[2094,  4, 15,  3],
[2094,  5, 14,  4],
[2094,  6, 13,  5],
[2094,  7, 12,  6],
[2094,  8, 11,  7],
[2094,  9, 10,  8],
[2094, 10,  9,  9],
[2094, 11,  8, 10],
[2094, 12,  8, 11],
[2095,  1,  6, 12],
[2095,  2,  5,  1],
[2095,  3,  6,  2],
[2095,  4,  5,  3],
[2095,  5,  4,  4],
[2095,  6,  2,  5],
[2095,  7,  2,  6],
[2095,  7, 31,  7],
[2095,  8, 30,  8],
[2095,  9, 28,  9],
[2095, 10, 28, 10],
[2095, 11, 27, 11],
[2095, 12, 27, 12],
[2096,  1, 25,  1],
[2096,  2, 24,  2],
[2096,  3, 24,  3],
[2096,  4, 23,  4],
[2096,  5, 22,  4],
[2096,  6, 20,  5],
[2096,  7, 20,  6],
[2096,  8, 18,  7],
[2096,  9, 16,  8],
[2096, 10, 16,  9],
[2096, 11, 15, 10],
[2096, 12, 15, 11],
[2097,  1, 13, 12],
[2097,  2, 12,  1],
[2097,  3, 14,  2],
[2097,  4, 12,  3],
[2097,  5, 12,  4],
[2097,  6, 10,  5],
[2097,  7,  9,  6],
[2097,  8,  7,  7],
[2097,  9,  6,  8],
[2097, 10,  5,  9],
[2097, 11,  4, 10],
[2097, 12,  4, 11],
[2098,  1,  2, 12],
[2098,  2,  1,  1],
[2098,  3,  3,  2],
[2098,  4,  2,  3],
[2098,  5,  1,  4],
[2098,  5, 31,  5],
[2098,  6, 29,  6],
[2098,  7, 28,  7],
[2098,  8, 26,  8],
[2098,  9, 25,  9],
[2098, 10, 24, 10],
[2098, 11, 23, 11],
[2098, 12, 22, 12],
[2099,  1, 21,  1],
[2099,  2, 20,  2],
[2099,  3, 22,  2],
[2099,  4, 20,  3],
[2099,  5, 20,  4],
[2099,  6, 19,  5],
[2099,  7, 18,  6],
[2099,  8, 16,  7],
[2099,  9, 15,  8],
[2099, 10, 14,  9],
[2099, 11, 12, 10],
[2099, 12, 12, 11],
[2100,  1, 10, 12],
[2100,  2,  9,  1],
[2100,  3, 11,  2],
[2100,  4, 10,  3],
[2100,  5,  9,  4],
[2100,  6,  8,  5],
[2100,  7,  7,  6],
[2100,  8,  6,  7],
[2100,  9,  4,  8],
[2100, 10,  4,  9],
[2100, 11,  2, 10],
[2100, 12,  1, 11],
[2100, 12, 31, 12] ];
};

LunarMap.date2s = function(d) {
  return LunarMap.d2s(d.getFullYear(), d.getMonth() + 1, d.getDate());
};

LunarMap.d2s = function(Y, M, D){
  var m = M;
  if(d < 10) m = '0' + M;
  var d = D;
  if(d < 10) d = '0' + D;
  return Y + '-' + m + '-' + d;
};

LunarMap.makeTable = function(){
  var raw = LunarMap.rawMonthTable();
  var date = new Date(Date.parse("February 5, 2000")); // raw[0]
  var lYear = 1999;
  var lMonth = 1;
  var lDay = 1;
  var tabG2l = {};
  var tabL2g = {};
  for(var i=0;;){
    var gYear  = date.getFullYear();
    var gMonth = date.getMonth() + 1;
    var gDay   = date.getDate();
    if( (gYear  == raw[i][0]) &&
        (gMonth == raw[i][1]) &&
        (gDay   == raw[i][2]) ){
      lMonth = raw[i][3];
      lDay   = 1;
      if(lMonth == 1){ lYear = lYear + 1; }
      i ++;
    }
    else {
      lDay = lDay + 1;
    }
    tabG2l[LunarMap.d2s(gYear, gMonth, gDay)] = [lYear, lMonth, lDay];
    tabL2g[LunarMap.d2s(lYear, lMonth, lDay)] = [gYear, gMonth, gDay];
    date.setDate(gDay + 1);
    if(date.getFullYear() > 2100){
      return { "g2l": tabG2l
             , "l2g": tabL2g
            };
    }
  }
}

LunarMap.table = LunarMap.makeTable();

LunarMap.g2l = function(Y, M, D) {
  var d = LunarMap.table.g2l[LunarMap.d2s(Y, M, D)];
  return d ? d.slice() : d;
};

LunarMap.l2g = function(Y, M, D) {
  var d = LunarMap.table.l2g[LunarMap.d2s(Y, M, D)];
  return d ? d.slice() : d;
};

LunarMap.date2l = function(d) {
  return LunarMap.g2l(d.getFullYear(), d.getMonth() + 1, d.getDate());
};

LunarMap.l2date = function(Y, M, D) {
  var d = LunarMap.l2g(Y, M, D);
  return d ? new Date(d[0], d[1] - 1, d[2]) : d;
};

LunarMap.special = function(d) {
  if(!d) return "";
  // 腊月廿九的除夕
  if(d[1] == 12 && d[2] == 29){
    var date = LunarMap.l2date(d[0], d[1], d[2]);
    date.setDate(date.getDate() + 1);
    var d2 = LunarMap.date2l(date);
    if(d2[2] == 1) return "除夕";
    else return "";
  }
  var str = d[1] + '-' + d[2];
  var specialMap = {
    '1-1': '春节',
    '1-15': '元宵',
    '5-5': '端午',
    '7-7': '七夕',
    '7-15': '中元',
    '8-15': '中秋',
    '9-9': '重阳',
    '12-8': '腊八',
    '12-30': '除夕'
  };
  var result = specialMap[str];
  if(!result) return "";
  return result;
};

LunarMap.yearStr = function(d){
  var gan = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
  var zhi = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
  var ganzhi = [];
  for(var i = 0; i < 60; i++){
    ganzhi.push(gan[i % gan.length] + zhi[i % zhi.length]);
  }
  return ganzhi[(d[0] - 1984) % 60] + '年'; // 1984 = 甲子
};

LunarMap.monthStr = function(d) {
  var months = ["正","二","三","四","五","六",
    "七","八","九","十","冬","腊"];
  return months[d[1]-1] + '月';
};

LunarMap.dayStr = function(d) {
  var days = ["初一","初二","初三","初四","初五",
    "初六","初七","初八","初九","初十","十一",
    "十二", "十三","十四","十五","十六","十七",
    "十八","十九", "二十","廿一","廿二","廿三",
    "廿四","廿五","廿六","廿七","廿八","廿九","三十"];
  return days[d[2] - 1];
}

LunarMap.toFullStr = function(d){
  if(!d) return '';
  return LunarMap.yearStr(d) + LunarMap.monthStr(d) + LunarMap.dayStr(d);
};

LunarMap.toStr = function(d) {
  if(!d) return '';
  return LunarMap.monthStr(d) + LunarMap.dayStr(d);
};

LunarMap.minDate = function(){return new Date(2000,1,5)};
LunarMap.maxDate = function(){return new Date(2100,12,30)};

