import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CoursePage = () => {
    const [selectedModule, setSelectedModule] = useState(1);

    const modules = [
        { id: 1, title: 'Module One', price: 4 },
        { id: 2, title: 'Module Two', price: 10 },
        { id: 3, title: 'Module Three', price: 7 },
        { id: 4, title: 'Module Four', price: 12 },
        { id: 5, title: 'Module Five', price: 15 },
        { id: 6, title: 'Module Six', price: 5 },
    ];

    const handleModuleSelection = (moduleId) => {
        if (selectedModule === moduleId) {
            setSelectedModule(null);
        } else {
            setSelectedModule(moduleId);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Text style={styles.heading}>Course Name</Text>
                <div style={styles.circle}>
                    <AntDesign name="user" size={24} color="black" style={styles.profilePic} />
                </div>

            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/course-image.png')} style={styles.image} />
            </View>
            <Text style={styles.subHeading}>Flutter with UI/UX Courses</Text>
            <Text>Created by <span style={styles.author}>Author Name</span></Text>
            <View style={styles.ratingRate}><Text style={styles.rating}><MaterialIcons color="#00aaff" size={18} name='star' />4.5</Text>
                <button style={styles.rateButton}>Buy at $456</button>
            </View>
            <View style={styles.modulesContainer}>
                {modules.map((module) => (
                    <View key={module.id} style={styles.moduleContainer}>
                        <TouchableOpacity
                            style={[
                                styles.moduleButton,
                            ]}
                            onPress={() => handleModuleSelection(module.id)}
                        >
                            <View style={styles.moduleDetailsContainer}>
                                <Text style={styles.moduleButtonText}>{module.title}</Text>
                                <Text style={styles.moduleButtonPrice}>${module.price} </Text>
                            </View>
                            <MaterialIcons
                                name={
                                    selectedModule === module.id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
                                }
                                size={24}
                            />
                        </TouchableOpacity>
                        {selectedModule === module.id && (
                            <View style={styles.purchaseModuleContainer}>
                                <ol style={styles.purchasePoints}>
                                    <li>Introduction</li>
                                    <li>What is UX/UI</li>
                                    <li>Why is UX/UI</li>
                                    <li>Importance of UX/UI</li>
                                </ol>
                                <Text style={styles.purchaseModuleText}>Purchase Module</Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    author: {
        color: '#00aaff',
    },
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#fff',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    imageContainer: {
        marginBottom: 10
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderColor: '#000',
        border: '1px solid black',
        position: 'relative'
    },
    profilePic: {
        marginLeft: 3,
        marginTop: 1,
        left: 2,
        top: 2,
        position: 'absolute'
    },
    image: {
        height: 175,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#000',
    },
    moduleDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    modulesContainer: {
        marginTop: 8,
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        padding: 8
    },
    moduleContainer: {
        marginBottom: 8,
    },
    moduleButton: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    moduleButtonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    moduleButtonPrice: {
        fontSize: 18,
        color: '#00aaff',
        fontWeight: 'bold'
    },
    purchasePoints: {
        backgroundColor: '#fff',
        margin: 0,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 30,
        border: 'none'
    },
    purchaseModuleText: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#00aaff',
        padding: 10,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 14,
        textAlign: 'center'
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingRate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4
    },
    rateButton: {
        backgroundColor: 'none',
        border: 'none',
        paddingBlock: 10,
        paddingInline: 16,
        borderRadius: 50,
        backgroundColor: '#00aaff',
        color: 'white'
    }
});

export default CoursePage;
