from collections import deque

# Define the initial state
initial_state = (1, 1, 1, 1, 1)  # (farmer, fox, chicken, grain, boat position)
goal_state = (0, 0, 0, 0, 0)      # (farmer, fox, chicken, grain, boat position)

def is_valid(state):
    f, fox, chicken, grain, b = state
    # Check if all items are on one side
    if (fox == chicken == 0 or chicken == grain == 0) and f != b:
        return False
    # Check if the fox and chicken are left together unsupervised
    if fox == chicken == 1 and f != b:
        return False
    # Check if the chicken and grain are left together unsupervised
    if chicken == grain == 1 and f != b:
        return False
    return True

def get_next_states(state):
    f, fox, chicken, grain, b = state
    next_states = []
    # Boat on the left bank
    if b == 1:
        for i in range(2):
            for j in range(2):
                for k in range(2):
                    if i + j + k == 1:
                        next_state = (f - i, fox - j, chicken - k, grain, 0)
                        if is_valid(next_state):
                            next_states.append(next_state)
    # Boat on the right bank
    else:
        for i in range(2):
            for j in range(2):
                for k in range(2):
                    if i + j + k == 1:
                        next_state = (f + i, fox + j, chicken + k, grain, 1)
                        if is_valid(next_state):
                            next_states.append(next_state)
    return next_states

def bfs():
    visited = set()
    queue = deque([(initial_state, [])])  # (state, path)
    
    while queue:
        state, path = queue.popleft()
        if state == goal_state:
            return path
        if state not in visited:
            visited.add(state)
            for next_state in get_next_states(state):
                queue.append((next_state, path + [next_state]))

def print_state(state):
    f, fox, chicken, grain, b = state
    left_shore = f"{'F' if f == 1 else ' '} {'Fox' if fox == 1 else ' '} {'Chicken' if chicken == 1 else ' '} {'Grain' if grain == 1 else ' '}"
    right_shore = f"{'F' if f == 0 else ' '} {'Fox' if fox == 0 else ' '} {'Chicken' if chicken == 0 else ' '} {'Grain' if grain == 0 else ' '}"
    boat = "B" if b == 1 else " "
    print(f"{left_shore:<20}<-- {boat:>1} -->{right_shore:>20}")

def print_solution(solution):
    if solution:
        print("Solution found:")
        print_state(initial_state)
        for i, state in enumerate(solution):
            print_state(state)
        print_state(goal_state)
    else:
        print("No solution found.")

solution = bfs()
print_solution(solution)
