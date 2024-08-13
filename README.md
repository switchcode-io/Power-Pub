# Power-Pub
A repository of PowerPub blog files.


import matplotlib.pyplot as plt
import numpy as np

def generate_differentiated_risk_map():
    """Generate a risk map that differentiates between Medium and Moderate risks using only inherent modules."""
    # Define the risk matrix with differentiated weights for Medium and Moderate
    risk_matrix = np.array([
        [1, 2, 4, 6],  # Low Likelihood
        [2, 4, 6, 8],  # Medium Likelihood
        [3, 6, 9, 12], # High Likelihood
        [4, 7, 10, 15] # Critical Likelihood
    ])

    # Define the labels for the axes
    likelihood_labels = ['Low', 'Medium', 'High', 'Critical']
    impact_labels = ['Low', 'Moderate', 'Medium', 'High']

    # Create the plot
    fig, ax = plt.subplots()
    cax = ax.matshow(risk_matrix, cmap="Reds")

    # Add color bar to the side
    fig.colorbar(cax)

    # Set axis labels
    ax.set_xticks(np.arange(len(impact_labels)))
    ax.set_yticks(np.arange(len(likelihood_labels)))
    
    ax.set_xticklabels(impact_labels)
    ax.set_yticklabels(likelihood_labels)
    
    # Annotate the matrix with the risk values
    for i in range(len(likelihood_labels)):
        for j in range(len(impact_labels)):
            ax.text(j, i, str(risk_matrix[i, j]), va='center', ha='center', color='black')

    # Set labels for axes
    plt.xlabel('Impact')
    plt.ylabel('Likelihood')

    # Set title
    plt.title('Differentiated Risk Map Based on Twistlock Vulnerability Results')

    # Display the plot
    plt.show()

# Generate and display the differentiated risk map
generate_differentiated_risk_map()