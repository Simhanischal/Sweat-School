import Functional from '../Images/FunctionalPage.PNG';
import Calisthenics from '../Images/CalisthenicsPage.png';
import AnimalFlow from '../Images/AnimalFlowPage.PNG';

export const PagePrograms = [
    {
        id: 0,
        name: 'Functional Training',
        image: Functional,
        description: `Functional training is a classification of exercise which involves training the body 
                      for the activities performed in daily life.`,
        popularWorkouts: ['Squat', 'Deadlift', 'Muscle Up', 'Burpee', 'Farmers Walk'],
        workoutsCapsule: ['Deadlift', 'Muscle Up'],
        benefits: ['Improves Posture', 'Improves Balance', 'Builds Functional Muscle', 
                   'Reduces Injury Risk'],
        benefitsCapsule: ['Posture', 'Balance'],
    },
    {
        id: 1,
        name: 'Calisthenics',
        image: Calisthenics,
        description: `Calisthenics is an art form of using your own bodyweight as a means to maximize 
                      human power and athletic ability.
                      `,
        popularWorkouts: ['L-Sit', 'Pull Up', 'Pistol Squat', 'Hand Stand', 'Hanging Leg Raises'],
        workoutsCapsule: ['L-Sit', 'Pistol Squat'],
        benefits: ['Improves Mobility', 'Burns Fat', 'Reduces Injury Risk', 'Requires No/Less Equipment'],
        benefitsCapsule: ['Mobility', 'Fat Burn'],
    },
    {
        id: 2,
        name: 'Animal Flow',
        image: AnimalFlow,
        description: 'Animal Flow is ground based movement, made fun, challenging and effective',
        popularWorkouts: ['Loaded Beast', 'Scorpion Reach', 'Travelling Crab',
                          'Deep Ape to Side Kick Through', 'Crab to Underswitch Taps'],
        workoutsCapsule: ['Loaded Beast', 'Scorpion Reach'],
        benefits: ['Improves Stability', 'Improves Co-ordination', 'Helps Gain Strength', 
                   'Requires no/less equipment'],
        benefitsCapsule: ['Stability', 'Strength'],
    },
];

export const HomePrograms = [
    {
        id: 0,
        name: 'Functional Training',
        image: Functional,
        description: 'Functional descripton here',
    },
    {
        id: 1,
        name: 'Calisthenics',
        image: Calisthenics,
        description: 'Calisthenics descripton here',
    },
    {
        id: 2,
        name: 'Animal Flow',
        image: AnimalFlow,
        description: 'Animal Flow descripton here',
    },
];