export type Feature = {
  name: string;
  label: string;
  kind: 'number' | 'category';
  required: boolean;
  options?: string[];
  min?: number;
  max?: number;
};

export const FEATURES: Feature[] = [
  { name: 'hotel', label: 'Hotel Type', kind: 'category', required: true,
    options: ['City Hotel', 'Resort Hotel'] },
  { name: 'lead_time', label: 'Lead Time (days)', kind: 'number', required: true, min: 0 },
  { name: 'arrival_date_year', label: 'Arrival Year', kind: 'number', required: true, min: 2015, max: 2017 },
  { name: 'arrival_date_month', label: 'Arrival Month', kind: 'category', required: true,
    options: ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'May', 'November', 'October', 'September'] },
  { name: 'arrival_date_week_number', label: 'Arrival Week Number', kind: 'number', required: true, min: 1, max: 53 },
  { name: 'arrival_date_day_of_month', label: 'Arrival Day of Month', kind: 'number', required: true, min: 1, max: 31 },
  { name: 'stays_in_weekend_nights', label: 'Weekend Nights', kind: 'number', required: true, min: 0 },
  { name: 'stays_in_week_nights', label: 'Week Nights', kind: 'number', required: true, min: 0 },
  { name: 'adults', label: 'Adults', kind: 'number', required: true, min: 0 },
  { name: 'children', label: 'Children', kind: 'number', required: true, min: 0 },
  { name: 'babies', label: 'Babies', kind: 'number', required: true, min: 0 },
  { name: 'meal', label: 'Meal Plan', kind: 'category', required: true,
    options: ['BB', 'FB', 'HB', 'SC', 'Undefined'] },
  { name: 'country', label: 'Country Code (ISO alpha-3)', kind: 'category', required: true,
    options: ['ABW', 'AGO', 'AIA', 'ALB', 'AND', 'ARE', 'ARG', 'ARM', 'ASM', 'ATA', 'ATF', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BOL', 'BRA', 'BRB', 'BWA', 'CAF', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'CN', 'COL', 'COM', 'CPV', 'CRI', 'CUB', 'CYM', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FRA', 'FRO', 'GAB', 'GBR', 'GEO', 'GGY', 'GHA', 'GIB', 'GLP', 'GNB', 'GRC', 'GTM', 'GUY', 'HKG', 'HND', 'HRV', 'HUN', 'IDN', 'IMN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JEY', 'JOR', 'JPN', 'KAZ', 'KEN', 'KHM', 'KIR', 'KNA', 'KOR', 'KWT', 'LAO', 'LBN', 'LBY', 'LCA', 'LIE', 'LKA', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDG', 'MDV', 'MEX', 'MKD', 'MLI', 'MLT', 'MMR', 'MNE', 'MOZ', 'MRT', 'MUS', 'MWI', 'MYS', 'MYT', 'NAM', 'NCL', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PLW', 'POL', 'PRI', 'PRT', 'PRY', 'PYF', 'QAT', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SGP', 'SLE', 'SLV', 'SMR', 'SRB', 'STP', 'SUR', 'SVK', 'SVN', 'SWE', 'SYC', 'SYR', 'TGO', 'THA', 'TJK', 'TMP', 'TUN', 'TUR', 'TWN', 'TZA', 'UGA', 'UKR', 'UMI', 'URY', 'USA', 'UZB', 'Unknown', 'VEN', 'VGB', 'VNM', 'ZAF', 'ZMB', 'ZWE'] },
  { name: 'market_segment', label: 'Market Segment', kind: 'category', required: true,
    options: ['Aviation', 'Complementary', 'Corporate', 'Direct', 'Groups', 'Offline TA/TO', 'Online TA', 'Undefined'] },
  { name: 'distribution_channel', label: 'Distribution Channel', kind: 'category', required: true,
    options: ['Corporate', 'Direct', 'GDS', 'TA/TO', 'Undefined'] },
  { name: 'is_repeated_guest', label: 'Repeated Guest? (0=No, 1=Yes)', kind: 'number', required: true, min: 0, max: 1 },
  { name: 'previous_cancellations', label: 'Previous Cancellations', kind: 'number', required: true, min: 0 },
  { name: 'previous_bookings_not_canceled', label: 'Previous Bookings Not Canceled', kind: 'number', required: true, min: 0 },
  { name: 'reserved_room_type', label: 'Reserved Room Type', kind: 'category', required: true,
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'L', 'P'] },
  { name: 'assigned_room_type', label: 'Assigned Room Type', kind: 'category', required: true,
    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'P'] },
  { name: 'booking_changes', label: 'Booking Changes', kind: 'number', required: true, min: 0 },
  { name: 'deposit_type', label: 'Deposit Type', kind: 'category', required: true,
    options: ['No Deposit', 'Non Refund', 'Refundable'] },
  { name: 'agent', label: 'Agent ID (0 if none)', kind: 'number', required: true, min: 0 },
  { name: 'days_in_waiting_list', label: 'Days in Waiting List', kind: 'number', required: true, min: 0 },
  { name: 'customer_type', label: 'Customer Type', kind: 'category', required: true,
    options: ['Contract', 'Group', 'Transient', 'Transient-Party'] },
  { name: 'adr', label: 'Average Daily Rate', kind: 'number', required: true, min: 0 },
  { name: 'required_car_parking_spaces', label: 'Required Parking Spaces', kind: 'number', required: true, min: 0 },
  { name: 'total_of_special_requests', label: 'Total Special Requests', kind: 'number', required: true, min: 0 },
];