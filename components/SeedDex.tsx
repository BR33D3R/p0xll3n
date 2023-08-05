// Define component
DexInterface(props) {
  // Initialize state for seed list and filter criteria
  state = {seeds: [], filter: {}}

  // When component mounts, fetch seed data from blockchain and update state

  // Define method to handle filter changes
  onFilterChange(filter) {
    // Update filter in state
    // Optionally, refetch seed data based on new filter
  }

  // Render seed list and filter controls
  render() {
    // Seed list, generated based on state
    // Filter controls, bound to state and trigger onFilterChange when updated
  }
}
