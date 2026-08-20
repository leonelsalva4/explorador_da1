import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: '#3a6ea5',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#3a6ea5',
  },
  filterText: {
    color: '#3a6ea5',
    fontSize: 13,
  },
  filterTextActive: {
    color: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#b00020',
    fontSize: 15,
    textAlign: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 280,
  },
  detailContent: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  favoriteButton: {
    borderWidth: 1,
    borderColor: '#3a6ea5',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  favoriteButtonActive: {
    backgroundColor: '#3a6ea5',
  },
  favoriteButtonText: {
    color: '#3a6ea5',
    fontWeight: '600',
  },
  favoriteButtonTextActive: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    color: '#666',
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    maxWidth: '60%',
    textAlign: 'right',
  },
});

export default styles;
