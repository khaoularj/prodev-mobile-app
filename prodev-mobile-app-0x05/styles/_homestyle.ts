import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: Dimensions.get("window").height,
    },
    companyLogo: {
        width: "100%",
        alignItems: "center",
        padding: 20,
        marginBottom: 50,
    },
    textGroup: {
        alignItems: "center",
    },
    textLarge: {
        color: "white",
        fontWeight: "800",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 12,
    },
    textSmall: {
        color: "white",
        fontSize: 18,
        fontWeight: "200",
        textAlign: "center",
    },
    transparentButton: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        flex: 1,
    },
    button: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 5,
        alignItems: "center",
        fontSize: 20,
        backgroundColor: "white",
        flex: 1,
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 20,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    homeText: {
        alignItems: "center",
        paddingVertical: 20,
    },

    // Adding missing styles for the search section
    searchGroup: {
        padding: 20,
        backgroundColor: "white",
        alignItems: "center",
    },
    searchFormGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    searchControlGroup: {
        flex: 1,
        paddingRight: 10,
    },
    searchControl: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
    },
    searchFormText: {
        fontSize: 14,
        color: "#555",
    },
    searchButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    // Adding the filter and pagination styles
    filterGroup: {
        flexDirection: "row",
        padding: 10,
    },
    filterContainer: {
        marginRight: 20,
        alignItems: "center",
    },
    paginationContainer: {
        paddingVertical: 20,
        alignItems: "center",
    },
    showMoreButton: {
        paddingVertical: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    showMoreButtonText: {
        fontSize: 16,
        color: "#007bff",
    },

    // Adding missing listingContainer style
    listingContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
